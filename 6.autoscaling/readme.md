Create the deployment:

`kubectl apply -f 6.autoscaling/deployment.yaml`

See how many pods are created:

`kubectl get pods`

We can create now the hpa:

`kubectl apply -f 6.autoscaling/hpa.yaml`

And see what happens to the pods:

`kubectl get pod`
