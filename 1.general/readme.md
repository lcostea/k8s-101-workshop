### Nodes

Get the list of nodes for the cluster:

`kubectl get nodes -o wide`


Getting the same, but in a verbose way:

`kubectl get nodes -o wide -v 8`


### Namespaces

Get a list of namespaces:

`kubectl get namespace`

Get all the resources from kube-system namespace:

`kubectl get all -n kube-system`

Get all the resources from all namespace:

`kubectl get all -A`

Create your own namespace:

`kubectl create namespace liviu-costea`

Get current context name:

`kubectl config current-context`

Switch that namespace to be the default one:

`kubectl config set-context <<context-name>> --namespace=liviu-costea`