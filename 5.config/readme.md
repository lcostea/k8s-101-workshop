Create the deployment:

`kubectl apply -f 5.config/deployment-config.yaml`

Lets get the events and see what happened: 

`kubectl get events --sort-by=.metadata.creationTimestamp`

We can create now the configmap:

`kubectl apply -f 5.config/configmap.yaml`

And see what happens to the deployment:

`kubectl get deploy`

Create the deployment with the resources

`kubectl apply -f 5.config/deployment-resources.yaml`

Check how the nodes resources are allocated:

`kubectl describe nodes`