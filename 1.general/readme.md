### Nodes

Get the list of nodes for the cluster:

`kubectl get nodes -o wide`


### Namespaces

Get a list of namespaces:

`kubectl get namespace`

Get all the resources from kube-system namespace:

`kubectl get all -n kube-system`

Get all the resources from all namespace:

`kubectl get all --all-namespaces`

Create your own namespace:

`kubectl create namespace liviu-costea`

Switch that namespace to be the default one:

`kubectl config set-context k8s-infoiasi-course --namespace=liviu-costea`