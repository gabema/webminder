!identifiers hierarchical

model {
    user = person "End User" {
        description "A person playing webminder"
    }

    system = softwareSystem "Webminder PWA" {
        description "Webminder web app"

        webapp = container "Web Application" {
            technology ".NET Blazor"

            view = component "Blazor App" {
            }

            domain = component "game logic"

            view -> domain "sends actions"
        }

        user -> webapp.view "Uses"
    }
}