# Installation

## Prerequisites

### .NET

.NET 6 must be installed (https://dotnet.microsoft.com/download).

You can check the active version by typing the following command:

```
dotnet --version
```

The runtime version 6.0 must be installed. You can check the installed versions by typing the following command:

```
dotnet --list-runtimes
```

The SDK version must be greater than or equal to 6.0. You can check the installed versions by typing the following command:

```
dotnet --list-sdks
```

### Node.js

Node.js 16 must be installed (https://nodejs.org/en/).

You can check the installed version by typing the following command:

```
node --version
```

### Packages

Neos packages are in a private feed.

#### NuGet packages

To be able to download the NuGet packages, you have to add the source by typing the following command:

```
dotnet nuget add source "https://pkgs.dev.azure.com/POLE-ERP-GROUPEISA/FMK/_packaging/Neos/nuget/v3/index.json" -n "Neos"
```

To register your credentials on the Azure Devops Nuget feed, you have to install a tool by typing the following PowerShell command:

```
iex "& { $(irm https://aka.ms/install-artifacts-credprovider.ps1) }"
```

#### NPM packages

To be able to download the NPM packages, create the `.npmrc` file in a directory where there will be your clusters :

```
registry=https://pkgs.dev.azure.com/POLE-ERP-GROUPEISA/FMK/_packaging/Neos/npm/registry/
always-auth=true
```

To register your credentials on the Azure Devops NPM feed, you have to install a tool by typing the following command:

```
npm install -g vsts-npm-auth
```

Then in the directory containing the `.npmrc` file, run the following command:

```
vsts-npm-auth -config .npmrc
```

## Neos CLI

Neos CLI contains all the necessary commands to manage a cluster. For more information, see the Neos CLI page.

To install it, type the following command:

```
dotnet tool install GroupeIsa.Neos.Console --global --ignore-failed-sources --no-cache --interactive
```

At the first installation, the command gives an url with a code to enter. You have to launch the url in the browser and enter the code in the web page.
To the message asking if the authentication was done from Visual Studio, answer yes then press CTRL+C in the terminal and run the previous command again.

If the tool is already installed, you can updated it by typing the following command:

```
dotnet tool update GroupeIsa.Neos.Console --global --ignore-failed-sources --no-cache --interactive
```

After the installation and each update, you must setup the development environment by typing the following command:

```
neos setup
```
