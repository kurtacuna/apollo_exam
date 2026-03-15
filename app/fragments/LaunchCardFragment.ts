import { graphql } from "../gql"

const LaunchCardFragment = graphql(`
    fragment LaunchCardFragment on Launch {
        id,
        mission_name,
        launch_date_local,
        launch_year,
        launch_site {
            site_name,
            site_name_long
        },
        rocket {
            rocket_name
        },
        details
    }
`)

export default LaunchCardFragment