import { graphql } from "~/gql";

export const RocketFragment = graphql(`
    fragment RocketFragment on Rocket {
        name,
        description,
        first_flight,
        height {
            feet,
            meters
        },
        diameter {
            feet,
            meters
        },
        mass {
            kg,
            lb
        },
        stages
    }    
`)