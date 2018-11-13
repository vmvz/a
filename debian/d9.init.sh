#!/usr/bin/env bash
cat > ~/.bashrc <<END
alias ai='apt -y install '
alias au='apt update'
alias ap='apt purge '
alias ac='apt-cache show '
alias cpu='cat /proc/cpuinfo'
alias ch='chmod 755 -R .'
alias g='glances'
alias h='htop'
alias ll='ls -alh'
alias ls="ls --color=auto"
alias n='echo "nohup command > n.txt 2>&1 &"'

# Nginx
alias nr='/etc/init.d/nginx restart'
alias nc='cd /etc/nginx/conf.d/'
alias nt='nginx -t'
alias nl='cd /var/log/nginx/'

alias s='systemctl '
alias sl='vim /etc/apt/sources.list'
alias sv='source venv/bin/activate'
alias snow='shutdown -h now'
alias vimba='vim ~/.bashrc && source ~/.bashrc'
alias vimrc='vim /etc/rc.local && cat /etc/rc.local'
alias ww='cd /data/www;'
END
source ~/.bashrc
cat > /etc/resolv.conf <<END
nameserver 114.114.115.115
nameserver 223.5.5.5
nameserver 1.2.4.8
END
rm -rf /etc/apt/sources.list*
cat > /etc/apt/sources.list <<END
deb https://mirrors.163.com/debian/ stable main contrib non-free
deb https://mirrors.163.com/debian/ stable-updates main contrib non-free
deb https://mirrors.163.com/debian-security stable/updates main contrib non-free
END
cat > /root/.vimrc <<END
syntax on
set clipboard+=unnamed
set nu
set showmatch
set hlsearch
set tabstop=4
set softtabstop=4
set shiftwidth=4
END
apt-get -q -y update
apt-get -y install net-tools htop lrzsz vim wget screen curl git build-essential
sed -i "s/^GRUB_TIMEOUT=.*$/GRUB_TIMEOUT=0/g" /etc/default/grub;cat /etc/default/grub|grep GRUB_TIMEOUT;update-grub2
ifconfig
