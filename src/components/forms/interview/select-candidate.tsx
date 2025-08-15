"use client";
import Image from "next/image";
import { IconChevronDown, IconEye, IconUserSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { Typography } from "@/components/shared/typography";
import useClickOutside from "@/hooks/use-click-outside";
import { Option } from "@/lib/type";
import { cn } from "@/lib/utils";

function SelectCandidate({
    options,
    value,
    onValueChange,
}: {
    options: Option[];
    value: string;
    onValueChange: (e: string) => void;
}) {
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
    const [focused, setFocused] = useState<boolean>(false);
    const selectContainerRef = useRef(null);

    useEffect(() => {
        setFilteredOptions(filterAndSortOptions(options, value));
    }, [value, options]);

    useClickOutside(selectContainerRef, () => setFocused(false));

    return (
        <div className="relative" ref={selectContainerRef}>
            {focused ? (
                <SelectTrigger
                    onClick={() => setFocused(true)}
                    value={value}
                    onValueChange={onValueChange}
                />
            ) : (
                <SelectValue
                    onClick={() => setFocused(true)}
                    option={
                        options.filter((val) => val.value === value)[0] || null
                    }
                />
            )}
            {focused && (
                <div className="absolute top-[105%] left-0 z-10 flex size-full h-fit max-h-[208px] flex-col gap-3.5 overflow-y-scroll rounded-lg border bg-grayscale-background-default p-2 shadow-[inset_0px_-1px_0px_0px_rgba(223,226,233,0.40)]">
                    {filteredOptions.map((candidate) => {
                        return (
                            <div
                                className={cn(
                                    "flex items-center justify-between rounded-full p-2.5 shadow-[inset_0px_-1px_0px_0px_rgba(223,226,233,0.40)] hover:bg-primary-surface-disabled/10",
                                    {
                                        "bg-primary-border-default/10":
                                            value === candidate.value,
                                    }
                                )}
                                onClick={() => onValueChange(candidate.value)}
                                key={`select-` + candidate.value}
                            >
                                <div className="inline-flex flex-1 items-center gap-2">
                                    <Image
                                        src={
                                            candidate.image ||
                                            "/_static/40x40.svg"
                                        }
                                        alt={candidate.label}
                                        width={40}
                                        height={40}
                                        className="size-10 rounded-full"
                                    />
                                    <Typography type="sm" color="body">
                                        {candidate.label}
                                    </Typography>
                                </div>
                                <div className="grid size-5 place-content-center">
                                    <IconEye className="size-3.5 text-grayscale-text-caption" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function SelectValue({
    onClick,
    option,
}: {
    option: Option | null;
    onClick: () => void;
}) {
    return (
        <>
            {option ? (
                <div
                    onClick={onClick}
                    className="h-20 w-80 gap-6 overflow-hidden rounded-[10px] bg-primary-surface-subtle p-1"
                >
                    <div className="inline-flex size-full items-center justify-center rounded-md bg-grayscale-surface-white px-2.5 py-3.5">
                        <div className="inline-flex flex-1 items-center gap-2">
                            <Image
                                src={option.image || "/_static/40x40.svg"}
                                alt={option.label}
                                width={40}
                                height={40}
                                className="size-10 rounded-full"
                            />
                            <Typography type="sm" color="body">
                                {option.label}
                            </Typography>
                        </div>

                        <IconEye className="size-4 text-grayscale-text-caption" />
                    </div>
                </div>
            ) : (
                <div
                    onClick={onClick}
                    className="flex h-20 w-80 items-center justify-center gap-6 overflow-hidden rounded-[10px] bg-primary-surface-subtle px-6 py-10"
                >
                    <IconUserSearch className="size-6 text-grayscale-text-negative" />

                    <Typography type="lg" color="negative" className="flex-1">
                        Select Candidate
                    </Typography>

                    <IconChevronDown className="size-6 text-grayscale-text-negative" />
                </div>
            )}
        </>
    );
}

function SelectTrigger({
    onClick,
    value,
    onValueChange,
}: {
    value: string;
    onClick: () => void;
    onValueChange: (value: string) => void;
}) {
    return (
        <div
            onClick={onClick}
            className="inline-flex h-20 w-80 items-center justify-center gap-6 overflow-hidden rounded-[10px] bg-primary-surface-subtle px-6 py-10"
        >
            <IconUserSearch className="size-6 text-grayscale-text-negative" />

            <Input
                containerClassName="border-0 rounded-none bg-primary-surface-subtle"
                autoFocus
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                className="h-7 flex-1 p-0 text-lg! font-semibold text-grayscale-text-negative focus-visible:ring-0"
            />

            <IconChevronDown className="size-6 text-grayscale-text-negative" />
        </div>
    );
}

export default SelectCandidate;

export function filterAndSortOptions(
    options: Option[],
    searchInput: string
): Option[] {
    const input = searchInput.toLowerCase();

    return options.slice().sort((a, b) => {
        const aName = a.label.toLowerCase();
        const bName = b.label.toLowerCase();

        const aIndex = aName.indexOf(input);
        const bIndex = bName.indexOf(input);

        if (aIndex === -1 && bIndex !== -1) return 1;
        if (aIndex !== -1 && bIndex === -1) return -1;

        if (aIndex !== bIndex) return aIndex - bIndex;

        return aName.localeCompare(bName);
    });
}
