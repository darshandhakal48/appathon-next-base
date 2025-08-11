#include <iostream>
#include <string.h>
#include <stdio.h>
#include <conio.h>
#include <windows.h>
#include <fstream>
#include <cstdio>

using namespace std;

void registerr();
void search();

class Employee
{
    int id;
    char name[50];
    float salary;

public:
    void setID(int id) { this->id = id; }
    void setName(char name[]) { strcpy(this->name, name); }
    void setSalary(float salary) { this->salary = salary; }
    int getID() { return id; }
    char *getName() { return name; }
    float getSalary() { return salary; }

    Employee() {}
    Employee(int i, char n[], float s)
    {
        id = i;
        strcpy(name, n);
        salary = s;
    }

    void display()
    {
        cout << "\nID: " << id << "\nName: " << name << "\nSalary: " << salary << endl;
    }

    void init()
    {
        cout << "\nEnter Name: ";
        cin.getline(name, 49);
        cin.ignore();
        cout << "\nEnter ID: ";
        cin >> id;
        cin.ignore();
        cout << "\nEnter Salary: ";
        cin >> salary;
        cin.ignore();
    }
};

class Programmer : public Employee
{
    int totalapps;
    char skills[100];

public:
    void setTotalApps(int n) { totalapps = n; }
    void setSkills(char skillss[]) { strcpy(skills, skillss); }
    int getTotalApps() { return totalapps; }
    char *getSkills() { return skills; }

    Programmer() {}
    Programmer(int i, char n[], float s, int apps, char skill[]) : Employee(i, n, s)
    {
        totalapps = apps;
        strcpy(skills, skill);
    }

    void display()
    {
        Employee::display();
        cout << "\nSkills: " << skills << "\nTotal Apps: " << totalapps << endl;
    }
    void registerProgrammer()
    {
    }
};

class Typist : public Employee
{
    int speed;

public:
    void setSpeed(int s) { speed = s; }
    int getSpeed() { return speed; }

    Typist() {}
    Typist(int i, char n[], float s, int sp) : Employee(i, n, s)
    {
        speed = sp;
    }
    void display()
    {
        Employee::display();
        cout << "\nTyping speed: " << speed << "wpm" << endl;
    }
    void registertypist()
    {
        system("cls");
        init();
        cout << "Enter Typing speed: ";
        cin >> speed;
        cin.ignore();
        ofstream ofs;
        ofs.open("mytypists.bin", ios::binary | ios::app);
        if (ofs.is_open())
        {
            ofs.write((char *)this, sizeof(*this));
            ofs.close();
            cout << "Typist resgistered successfully!\n"
                 << endl;
        }
        else
        {
            cout << "File open error! mytypists.bin could not be opened!\n " << endl;
        }
    }
    void displayAll()
    {
        system("cls");
        ifstream ifs;
        ifs.open("mytypists.bin", ios::binary);
        if (ifs.is_open())
        {
            ifs.read((char *)this, sizeof(*this));
            while(!ifs.eof())
            {
                this->display();
                ifs.read((char *)this, sizeof(*this));
            }
            ifs.close();
        }
        else
        {
            cout << "File open error! mytypists.bin could not be opened!\n " << endl;
        }
    }
};

int main()
{
    system("cls");
    Typist t;
    int choice;

    do
    {
        cout << "\nEmployee Management System\n--------------------------------------\n";
        cout << "1.Register" << endl;
        cout << "2.Search" << endl;
        cout << "3.Display all typists" << endl;
        cout << "4.Exit" << endl;

        cout << "\n\nWhich operation ?" << endl;
        cin >> choice;
        switch (choice)
        {
        case 1:
            registerr();
            break;
        case 2:
            search();
            break;
        case 3:
            t.displayAll();
            break;

        case 4:
            cout << "\nThanks for using this application!\n"
                 << endl;
            getch();
            return 0;
        }
    } while (true);

    return 0;
}

void registerr()
{
    int n;
    Typist t;
    Programmer p;
    system("cls");
    cout << "1. Register Typist" << endl;
    cout << "2. Register Programmer" << endl;
    cout << "3. Exit" << endl;
    cout << "\nWhich operation? ";
    cin >> n;
    cin.ignore();
    switch (n)
    {
    case 1:
        t.registertypist();
        break;
    case 2:
        p.registerProgrammer();
        break;
    case 3:
        cout << "\nGOING BACK TO MAIN MENU!\n"
             << endl;
        getch();
        return;
    }
}
void search()
{
    cout << "Inside Search: " << endl;
}