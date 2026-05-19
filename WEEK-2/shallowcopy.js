let user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
              copyUser={...user}
              user={
                id: 101,
                name: "cherry",
                preferences: {
                  theme: "light",
                  language: "en"
                }
              }
              console.log(user)
              console.log(copyUser)
