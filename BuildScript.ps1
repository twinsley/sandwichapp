$registry = Read-Host -Prompt "Please enter the Azure Container Registry name"
az login
az acr login -n $registry
$appName = "$registry.azurecr.io/sandwichapp"
$appNameTagged = "$appName`:latest"
Write-Host $appNameTagged
.\mvnw.cmd package
docker build -t $appName .
docker push $appNameTagged