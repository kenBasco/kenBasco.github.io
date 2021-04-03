# Object Oriented Programming


## What is Object Oriented Programming?

All real world entities in a problem are treated as **Objects**.

Objects in a banking problem, could be customers like Yonathan, Nora, and Joan.

Every Object has **attributes** like name, Id, balance, etc. Their attributes hold **values** that define the state of the object.  

All objects have **behaviours** in how they manage or communicate their current state through methods.  

An example of a behaviour is the Customer object's getName() which returns its name.


An Object-Oriented system is made up of Objects that collaborate with eachother
through invoking behaviours.  

A **Class** is a blueprint rhat models an object's state and behaviour.  


Yonathan: CUSTOMER

<--- State

- name: Yonathan
- customerId: 123  
- bankAccount: YonathanAccount  

<--- Behavior  

+ getName(): String  
+ getBankAccount(): Account  


YonathanAccount: Account

<--- State  

- balance = 420  
- interest = 20  
- interestRate = 10/100  

<--- Behavior

+ deposit(): void  
+ withdraw(): double  
+ CalculateInterest(): int  


- exercise in making a rectangle object

## Data Types  and Variables  

[[tree diagram of data types and primitive to non-primitive, boolean, numerical, etc]]

[[chart of all data types and corresponding byte value]]


| Datatype|Default Value |Default size |
|-|-|-|
| boolean|false |1bit |
| char|'\u0000' |2byte |
|byte|0|1 byte|
|short|0|2 byte|
|int|0|4 byte|
|long| 0L| 8 byte|
|float|0.0f|4byte|
|double|0.0d|8byte|

2 types of variables: primitive and reference  


---

* NOTE: only do exercise with a summary f the concept preceding it

- operators  
- widening and narrowing (type casting)

## assignment on making a bank app

- uses oop AND typecasting,
- dtattypes and bit shifting is used for typecasting
- they are used due to save space when youre doing operations for calculating interest


## explaining conditional statements, control flow

- pretty cool because they use navigating a bank/atm  as an example  
- if else to check how the user can move menu to menu  
- do while loops for asking for valid information  
- switch statements for when users are given options

## arrays

- what if we want to hold multiple values at once (multiple phone numbers of customer)?
- multi dimensional variables come in when holding multiple sets of customers' phones/stuff  



- assignment is on holding the salaries of multiple employees


## Enhanced for-loop

traversing though array elements can also be done using specialized loop called enhanced for loop  

### best practices

- Prefer using for loop for readablility
- normal for loop is faster than for-each loop since it makes an internal iterator

- you cant use for-each when modifying or deleting collections of array selectively, nor
when you need to iterate through more than one collection in parallel

## assignment is create a java class and initialize array to fixed size  
this will hold the marks of subjects, one method will store and another method will display
the marks

## Classes and objects  

### Abstraction  
the process of identifying essential details to be known and non essential to be ignored
for the user sysytem/problem  (i.e., a customer in a banking app doesnt need skin tone variable lol)
each object has their own activities relavent to them  

### Encapsulation  
in which we wrap around the essential code within a single unit to hide the internal state from the world , their states cannot be accessed from other entities

(customers can only buy and sell and have money, but they cannot sell)  

## Inheritance  

When some entities have similar behaviours, so we want to be able to reuse code  

- home loan and car loan inherit/modeled from the Loan class

### method overloading: object gets extra behaviours
### method overiding: object has same behaviours, but does them differently, added nuance lol  



## Polymorphism (many forms)

can perform the same task in different ways  
- you can deposit money in cash, cheque, atm, counter, etc  

## constructors  

used as blue print in initializing an object
- *default consrtuctors will provide values*
- *parameterized constructors take arguments to initialize the attributes*

### exercise: creat different chocolates that have different weights, sizes, and prices to them  
 - this keyword?  

## SUPER  

super keyword is used to invoke parent class and access parent variables  and methods  
you call super to get the parent's method or stuff
