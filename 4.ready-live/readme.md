### Probes

#### Liveness

Create a new deployment with a liveness probe configured:

`kubectl apply -f 4.ready-live/deployment-liveness.yaml`

What happens in the code: https://github.com/lcostea/cfp-api/blob/master/main.go#L58
Describe one of the pods: 

`kubectl describe pod `

Set a `timeoutSeconds: 2` (in code we wait for 1 sec before we return the response) field for the liveness probe and apply again the deployment

`kubectl apply -f 4.ready-live/deployment-liveness.yaml`

Create a new deployment with a startup and liveness probe configured:

`kubectl apply -f 4.ready-live/deployment-startup.yaml` 

Set a `timeoutSeconds: 2` field for the startup probe and apply again the deployment
Set a `timeoutSeconds: 2` field for the liveness probe and apply again the deployment

#### Readiness

Create a new deployment with a readiness probe configured:

`kubectl apply -f 4.ready-live/deployment-readiness.yaml`

Set a `timeoutSeconds: 6` (default is 1 second) field for the readiness probe and apply again the deployment. It helps also the rollout.

`kubectl apply -f 4.ready-live/deployment-readiness.yaml`

