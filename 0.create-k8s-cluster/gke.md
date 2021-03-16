### gke creation

Ensure that you have Google Kubernetes Engine API enabled:

https://console.cloud.google.com/apis/library/container.googleapis.com?q=kubernetes%20engine&_ga=2.61808164.987020675.1615490381-1203340270.1614084791



Create the cluster with only 1 node (feel free to increase --num-nodes, but costs might apply):
- the region picked is europe-west3 which is in Frankfurt, the only rule being reduced latency (so as close to our location)

`gcloud container clusters create k8s-101-course --region europe-west3 --num-nodes=1`


This is not needed as when the cluster is created the credentials are added automatically
Get credentials for the cluster:

`gcloud container clusters get-credentials k8s-101-course`