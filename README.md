# README
Step to run:

* cp config/database.yml.sample config/database.yml
* Add username & password in config/database.yml
* run below command to open credential file:
EDITOR="vim" rails credentials:edit -e development

Add flowing details like in that file:

```
full_contact:
        end_point: https://api.fullcontact.com/v2/person.json
        header:    X-FullContact-APIKey
        api_key:   xxxxxxxxxxxxxxxxxxxxxxxxxx
```

* Bundle install & yarn install
```
bundle install
yarn install
```

* Create db
```
rails db:create
```

* Run migration
```
rails db:migrate
```

* Run delayed job adapter
```
rails jobs:work
```

* Run Rails server
```
rails s
```
