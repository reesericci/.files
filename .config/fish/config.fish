function neofetch
  env SHELL=/bin/fish neofetch $argv
end

figlet -w 100 reesericci@poptop | lolcat
neofetch | lolcat

alias vim="nvim"
alias ls="exa -lah"
alias cat="bat"

#  Functions needed for !! and !$
function __history_previous_command
  switch (commandline -t)
  case "!"
    commandline -t $history[1]; commandline -f repaint
  case "*"
    commandline -i !
  end
end

function __history_previous_command_arguments
  switch (commandline -t)
  case "!"
    commandline -t ""
    commandline -f history-token-search-backward
  case "*"
    commandline -i '$'
  end
end
# The bindings for !! and !$
if [ $fish_key_bindings = fish_vi_key_bindings ];
  bind -Minsert ! __history_previous_command
  bind -Minsert '$' __history_previous_command_arguments
else
  bind ! __history_previous_command
  bind '$' __history_previous_command_arguments
end

set B2_ACCOUNT_ID 00220c852b77ed80000000001
set B2_ACCOUNT_KEY K002o8Mltol0L1EeJQLMTZB74ds4JOg
export B2_ACCOUNT_ID
export B2_ACCOUNT_KEY

alias npm="nvm exec npm"
