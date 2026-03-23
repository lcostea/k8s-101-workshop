## Probes

### Liveness

Create a new deployment with a liveness probe configured:

`kubectl apply -f 4.ready-live/deployment-liveness.yaml`

Describe one of the pods: 

`kubectl describe pod `

We can break it and see how it will be restarted

### Readiness

Create a new deployment with a healthy and readiness probes configured:

`kubectl apply -f 4.ready-live/deployment-readiness.yaml`


### Startup

Create a new deployment with a startup, liveness and readiness probes configured:

`kubectl apply -f 4.ready-live/deployment-startup.yaml` 
