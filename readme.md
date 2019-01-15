# HowTo

To start the application launch `vagrant up`.
The Vagrantfile will create two machines named *web* and *db*. The first one is a nodeJS wep application that receive only POST request and make write request to the second machine on which an InfluxDb instance is running. The Vagrantfile use ansible to provision the nodes. I used **ansible-pull** to enable a pull model update of the configuration, letting the node ask for the configuration to a central git repo instead of forcing the developer to contact the machine and load the configuration. The git repo is used only for the web machine, and is located on the link https://github.com/m4rvin/ansibleMyAppWebPlay/blob/master/local.yml .
The web machine is configured to forward request on the host machine port 4567 to the guest machine port 80 on which the web server is listening on.
To send a POST request use the following command from the guest machine:
`curl -X POST http://localhost:4567`

If you want to check the data written on the database, you need to enter into the db machine and make a query, so type the following:
* `vagrant ssh db`
* `curl -G 'http://localhost:8086/query?pretty=true' --data-urlencode "db=mydb" --data-urlencode "q=SELECT \"value\" FROM \"eventlog\" WHERE \"region\"='us-west'"`

You should receive a json reponse containing the datasets written in the database so far.
