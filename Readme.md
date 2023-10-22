# User Guide for Setup

## Introduction

This user guide will provide directions for initial setup to get the app up and running. It will then guide you through using the app, including managing the menu and using the checkout process.
Installation and Using the Application

## Prerequisites

Installation of this app has a few prerequisites listed below that need to be completed first. If any of them are not completed, set them up before continuing.
* Azure account: If you don’t have an Azure account set up follow this guide to set one up. https://learn.microsoft.com/en-us/dynamics-nav/how-to--sign-up-for-a-microsoft-azure-subscription
* Azure Container Registry: If you don’t already have an Azure Container Registry, follow this guide to set one up. https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal?tabs=azure-cli
* Azure CLI installed: If you don’t have the Azure CLI installed on your development machine, follow this guide to install it: https://learn.microsoft.com/en-us/cli/azure/install-azure-cli
* PostgreSQL database: If you don’t have one set up already, follow this guide to set it up: https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal

### Installation

To install the app, we will need to build it, package it into a container, then push the container to the registry. After doing that we will be able to create the Web App Service and deploy the container. Follow the steps below for this process.
1. Run the data.sql script on your database to load sample data if needed.
2. Run the BuildScript.ps1 script. It will ask for the container registry name, then have you log in to Azure. After you do that it will run a build, package it, and upload it to the Azure Container Registry.
3. Go to the Resource Group you intend to host the app in, click Create, and search for Web App for Containers, then select it. Set your app name and configure the instance to be a Linux OS for Docker containers
4. Go to the Docker tab and set the source to be your Azure Container Registry, and select the image., then click Review + Create
5. After doing that, go to the new web app, select the Configuration tab on the left sidebar, and set the DB environment settings. The three that need set are as follows:
    1.	DATABASEURL: jdbc:postgresql://<your db address>
    2.	DBPASS: Your DB password
    3.	DBUSER: Your DB login name

At this point the app should be ready for use. You can access it at the default URL from the app service, or add a custom domain depending on the level of the app service you selected.

## Using the App

### Purchasing

To use the app, start at the home page. This page has the menu and cart to handle the checkout functionality. To use this, click the cart icon on an item to add it to the cart. Click Select Toppings and add toppings if desired. After doing that, click Checkout on the right side under the cart. That will give the total to charge the customer. After charging the customer, click Checkout again and it will finalize the purchase. It should return a purchase ID afterwards, this identifies the purchase if it needs to be looked up later.

###  Menu management

To add, change, and remove menu items, click the edit icon on the left side menu. That will take you to a screen that lists all the items on the menu. An item can be edited or removed by clicking the corresponding button under the Action column on the left, and an item can be added by selecting the Add item button in the upper right corner. The filter bar at the top allows you to filter the items shown by name or description.

### Customer management

The customer management page can be accessed from the person icon on the left sidebar menu. To add a customer, go to the page, then click Add Customer. Fill out the fields, then click Add Customer again and it will add them. To edit a customer, click the eye icon on the customer, then make the necessary changes. Customers cannot be deleted from the front end for security reasons.

### Reports

For reports, go to the bottom Report icon on the side bar. There you’ll find a report of items added or modified in the menu in the last week.
