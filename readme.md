# Basic k8s folder

### Prerequisite

#### Installation

1.**Docker Deskstop**
###### For Windows
`https://docs.docker.com/desktop/install/windows-install/`
###### For Mac
`https://docs.docker.com/desktop/install/mac-install/`

2.**Ingress-nginx**
 `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml`

3.**Skaffold** 
`curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-darwin-arm64 && \
sudo install skaffold /usr/local/bin/`



##### Start 
`skaffold dev`