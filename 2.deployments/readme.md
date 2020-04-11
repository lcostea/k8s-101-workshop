### Pods

Create the pod:

`kubectl apply -f 2.deployments/pod.yaml`

Lets get the pod ip: 

`kubectl get po -o wide`

In a separate terminal, get a shell inside the cluster and lets contact the above web app:

`kubectl run -it alpine --image=alpine --restart=Never /bin/sh`

    Inside the pod shell, the following commands

    apk add curl

    curl http://<pod-ip>:3000

    curl http://<pod-ip>:3000/callforpapers

Delete the pod and recreate it so we can see the ip changes:

`kubectl delete pod go-api-demo`

`kubectl apply -f 2.deployments/pod.yaml`


### Replicaset

Create the replicaset:

`kubectl apply -f 2.deployments/replicaset.yaml`


### Deployments

Create the deployment, rollout strategy:

`kubectl apply -f 2.deployments/deployment-rollout.yaml`

Check the new deployment, the replicaset created underneath and the pods:

`kubectl get deploy`

`kubectl get rs`

`kubectl get po`

#### Rollout strategy

Apply a new image so we can see the rollout in action

`kubectl set image deployment.v1.apps/nginx-rollout nginx=nginx:1.16.1`

Watch how the pods rollout progresses

`kubectl get po -w`

See the switch of the replicasets:

`kubectl describe deploy`

Apply an image that doesn't exist and see how the pods rollout is blocked

`kubectl set image deployment.v1.apps/nginx-rollout nginx=nginx:1.161`


#### Recreate strategy

Create another deployment with recreate strategy:

`kubectl apply -f 2.deployments/deployment-recreate.yaml`

Check how the pods are being affected in a separate window:

`kubectl get po -w`

Apply a new image so we can see the recreate in action

`kubectl set image deployment.v1.apps/nginx-recreate nginx=nginx:1.16.1`

Apply an image that doesn't exist and see how the pods recreate is done whatever the consequences

`kubectl set image deployment.v1.apps/nginx-recreate nginx=nginx:1.161`