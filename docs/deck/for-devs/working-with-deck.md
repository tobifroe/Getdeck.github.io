---
sidebar_position: 2
---
# Working with Decks and the CLI
A [Deckfile](/docs/deckfile/specs) can be understood similar to what a `docker-compose` file is doing for a developer.
It creates a development infrastructure, usually coming with multiple services, e.g. databases, full-text search indexes
and applications. However, in opposite to a docker-compose file, a Deckfile creates that infrastructure based on a real
Kubernetes cluster (not just `docker run ...` with some on-top convenience).  

Ideally, the Deckfile for a developer's setup draws the Kubernetes workloads from production(-close) environments. That
allows development teams to share the configuration in which a container is finally operated.  
Getdeck provides a CLI `deck` which comes with most of the popular tools from the Kubernetes ecosystem without having them
locally managed. This includes `Helm` (with plugins), `kustomize` and others. Getdeck allows provisioning Kubernetes
clusters without having developers to know all the ins and outs of these tools. Hence, the process of spinning up development
setups becomes a breeze.

## Setup a local development infrastructure
Of course, there a countless numbers of development setups, requirements and moving parts in production. However, Getdeck
is designed to be as versatile as possible to different use-case scenarios.
Let's assume you want to provision a common Kubernetes-based tech stack on your machine. Either you find what you need
in Getdeck's [Wharf](/docs/deckfile/wharf), or you have to write your own Deckfile.  
**Important:** If you find a popular stack missing in    Wharf, please consider adding it with a 
[_Pull Request_ on Github](https://github.com/Getdeck/wharf).  

The `deck` CLI can be called with a specific location of a `deck.yaml`, for example `deck get ./deck.yaml`. This
will create the Kubernetes setup from a local Deckfile in this directory.

## What happens on `deck get ...`
There are a couple of steps automated with the `get`-operation:

1. Load and verify the given Deckfile  
2. Check if the Kubernetes provider (such as _k3d_, _kind_, etc.) is available; if not, install it  
3. Create a logical Kubernetes cluster with the given provider and cluster settings (including port-mappings, etc.)  
4. Pull the Kubernetes manifest sources from all specified locations using the identity of the user  
5. Preprocess manifest sources, for example generate _Helm charts_ with the configuration from the Deckfile  
6. Apply all workload manifests to the Kubernetes cluster  
7. Print useful information about the setup and how to get started working with it  
8. Optionally: wait for all Pods to become ready  

This process is supervised by `deck` to handle common errors or revert everything in case of an unfixable error. Upon
a technical issue the cluster is removed immediately.  
In case of persistent errors the _debug_ flag (`deck -d get ...`) can help to find out what is causing the problem.

This operation can be run as often as needed. Running it later on will cause your development setup to stay up-to-date
with the Deckfile in case it is pulled from a remote location.  
If you need more than one Deck (and the Deckfiles in question also specifies multiple Decks), you can run `deck get --name ...` for each
required Deck from the file. This will still create only one cluster (effectively sharing it between Decks) and install 
multiple Decks to it. This can be useful for multiple development teams which are developing different services communicating with
each other.

This operation is similar to `docker-compose up -d`

## Halt the development infrastructure
The `stop`-operation allows to pause the current Kubernetes development cluster while keeping the state in place. Depending
on the Kubernetes provider this will shut down the cluster effectively saving resources.  
If a cluster is stopped, running another `deck get ...` on a Deckfile will bring this existing cluster back to life.  

This operation is similar to `docker-compose stop`

## Remove a Deck 
If you don't need to run a certain Deck any longer in your development infrastructure, you can delete it with the `remove`-operation.
This will execute all the steps from the `get`-operation (especially the preprocessing of the workload manifests) but instead of
creating the resulting Kubernetes objects in the cluster, the sources are used to remove them.

## Remove the development infrastructure
You can remove Decks individually or remove the entire Kubernetes cluster with the `remove --cluster`-operation. This will
cause the underlying Kubernetes provider to eliminate the cluster including its state from the development machine.

This operation is similar to `docker-compose down -v --rmi all`.
