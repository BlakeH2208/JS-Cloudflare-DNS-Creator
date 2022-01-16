const axios = require("axios")

        axios({
            url: "https://api.cloudflare.com/client/v4/zones/your zone ID/dns_records",
            method: 'POST',
            headers: {
                'X-Auth-Email': 'user@example.com',
                'Content-Type': 'application/json',
                'X-Auth-Key': 'your global api key',
            },
            data: {
                "type": "",
                "name": "",
                "content": "",
                "ttl": ,
                "priority": ,
                "proxied": ,
            }})
