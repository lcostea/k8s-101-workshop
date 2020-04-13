### Liveness and Readiness probes

#### Liveness

Create a new deployment with a liveness probe configured:

`kubectl apply -f 4.ready-live/deployment-liveness.yaml`

Set a `timeoutSeconds: 2` field for the liveness probe and apply again the deployment

`kubectl apply -f 4.ready-live/deployment-liveness.yaml`

Create a new deployment with a startup and liveness probe configured:

`kubectl apply -f 4.ready-live/deployment-startup.yaml` 

(note: it will fail on clusters older than 1.16)


Create a new deployment with a readiness probe configured:

`kubectl apply -f 4.ready-live/deployment-readiness.yaml`

Set a `timeoutSeconds: 6` field for the readiness probe and apply again the deployment. It helps also the rollout.

`kubectl apply -f 4.ready-live/deployment-readiness.yaml`

