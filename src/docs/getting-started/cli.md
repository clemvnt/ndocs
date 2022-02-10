# CLI

## Commands

### neos setup

This command checks/installs/updates the development environment.

It is recommended to run the command when installing or updating the Neos CLI tool.

The steps are :

- Check the version of the prerequisites (.NET, Node and NPM).
- Generate a development certificate and associate it to the HTTPS port. _Windows only_
- Install OmniSharp which is a tool to provide the Neos Studio code editor all the intelligence (autocompletions, diagnostics, documentation). _Windows only_

### neos init

This command initializes a new cluster in the current directory.

Three files are created :

- `[DirectoryName].yml` : Cluster configuration file.
- `[DirectoryName].connectionstring.yml` : Cluster database configuration file.
- `[DirectoryName].auth.yml` : Cluster authentication configuration file.
- `dotnet-tools.json` : .NET tools manifest file.

When a neos command is executed in the cluster directory containing the `dotnet-tools.json` file, the tool with the specified version is used. This allows to have several versions of the tool between different clusters.

### neos migrate

This command migrates the database.

### neos build

This command executes the **neos build client** and **neos build server** commands.

#### neos build client

This command builds the client application of the cluster.

Before starting the build, we check that the client application dependencies are installed. If this is not the case, they are installed.

#### neos build server

This command compiles the .NET solution of the cluster in Release.

## Update the tool that a cluster uses

When a cluster is initialized with the neos init command, a dotnet-tools.json file is generated. This file contains the version of the Neos tool to use in the cluster directory.

It is recommended to keep this file on a real cluster for several reasons :

- If several developers are working on the same cluster, we are sure that all developers are using the same version.
  This allows to use different versions on different clusters.
- To update the version that the cluster uses, you just have to modify the dotnet-tools.json file by indicating the version to use.

You can delete this file on a test cluster where you always want to use the latest installed version.
