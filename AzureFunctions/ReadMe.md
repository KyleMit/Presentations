# Azure FUN-ctions

An Introduction to Serverless Compute  
on the .NET Cloud

<img src="https://i.imgur.com/PayeuSI.png" width="150" alt="azure" class="transparent-img">


By me, Kyle Mitofsky, a developer

---

## ___aaS

* **Infastructure** (VM)
* **Platform** (Container)
* **Functions** (micro-service)
<!-- * **Storage** + **Database** -->




## Concern vs. Control

Con(cern + trol)

---

## Azure

* Web Apps
* Web Jobs
* Service
* Logic Apps




## Ecosystem

Azure is Pickle Jar

![Tom Hanks Pickle Jar](https://i.imgur.com/XNXWWdG.gif)


---

## Functions

* Web Apps + Web Jobs
* Events + Code d



## Triggers


* HTTP 
  * Web API

* Time / Events
  * IFFTT




## Binding

Shortcuts



## Pricing


---

## Tooling

* **VS Code** (VS 2017, but worse)
  * Extensions
* **Postman** (Browser, but better0)
* **Azure Table Storage Explorer** (SSMS, but worse)

---

## CloudTable CRUD

Read

```cs
var finder = TableOperation.Retrieve<MyTableEntity>("key", id);
var findResult = await reminderTable.ExecuteAsync(finder);
```



## Input / Output Bindings


---

# Demo Time

---

## Resources

* [* as a Service](https://en.wikipedia.org/wiki/As_a_service)
* [Function - Triggers and Bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings)

