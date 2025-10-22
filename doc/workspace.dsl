workspace "My Project Workspace" "Architecture documentation for My Project" {

    !include model.dsl
    !adrs ./adr adrtools

    views {
        systemContext system {
            include *
            autolayout lr
        }

        container system {
            include *
            autolayout lr
        }

        theme default
    }
}
