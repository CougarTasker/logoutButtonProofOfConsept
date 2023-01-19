FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-16
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git

# install the cli 
RUN npm install -g twilio-cli@5.3.1

USER node
RUN sudo chsh -s /bin/zsh

RUN twilio plugins:install @twilio-labs/plugin-flex@6.0.3

# change the shell theme
RUN rm -rf ~/.oh-my-zsh
RUN sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# COPY .zshrc ~/.zshrc
# COPY .p10k.zsh ~/.p10k.zsh
### idk COPY doesnt seem to work


RUN twilio autocomplete zsh
RUN printf "eval $(twilio autocomplete:script zsh)" >> ~/.zshrc
