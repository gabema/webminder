model {
    user = person "End User" {
        description "A person who uses the system"
    }

    system = softwareSystem "My Project" {
        description "The system we're building"

        webapp = container "Web Application" {
            technology "Angular"
        }

        api = container "API Service" {
            technology ".NET 8"
        }

        db = container "Database" {
            technology "PostgreSQL"
        }

        user -> webapp "Uses"
        webapp -> api "Calls"
        api -> db "Reads/Writes"
    }
}