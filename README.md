How to setup React Native development docker:
https://dev.to/animusna/dev-container-for-react-native-with-expo-f7j

# Prerequisites
1. Expo Go is install on the dev device.
2. If working with WSL
    1. Enable port 8081 in the window's firewall (so the device can access it)
    2. Forward the port from windows IP to WSL's IP:  
        `netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=8081 connectaddress=<wsl-ip> connectport=8081`  
        Validate that it worked using the following  
        `netsh interface portproxy show all`  

# Create the app (run only once)
```bash
npx create-expo-app -t blank <app-name>
```

# Run the app
```bash
cd <app-name>
npx expo start
```