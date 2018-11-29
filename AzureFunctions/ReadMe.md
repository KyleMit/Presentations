# Azure FUN-ctions

An Introduction to Serverless Compute  
on the .NET Cloud


By me, Kyle Mitofsky, a developer

---

## [___aaS](https://en.wikipedia.org/wiki/As_a_service)

* [Infastructure](https://en.wikipedia.org/wiki/Infrastructure_as_a_service)___ (VM)
* [Platform](https://en.wikipedia.org/wiki/Platform_as_a_service)___(Container)
* [Functions](https://en.wikipedia.org/wiki/Function_as_a_service)___(micro-service)
* [Storage](https://en.wikipedia.org/wiki/Cloud_storage) + [Database](https://en.wikipedia.org/wiki/Cloud_database)


---

## Concern vs. Control

Con(cern + trol)

---

## Azure

* Web Apps
* Web Jobs
* Service
* Logic Apps

---

## Functions

* Benefits
* Pricing

---

## Ecosystem

* Azure is Pickle Jar

![Tom Hanks Pickle Jar](https://media.giphy.com/media/IyrtK0SXyy4rS/giphy.gif)

---

## Triggers

* [Triggers and Bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings)
* [Http Binding](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook)

* HTTP 
  * Web API

* Time / Events
  * IFFTT

---

## Binding

Shortcuts

---

## Tooling

* VS Code
  * Extensions
* Postman
* Azure Table Storage Explorer  

---

## CloudTable CRUD


```cs
var finder = TableOperation.Retrieve<MyTableEntity>("key", id);
var findResult = await reminderTable.ExecuteAsync(finder);
```