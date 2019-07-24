import React from 'react';
import Queries from '../../graphql/queries';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
const { FETCH_GOD } = Queries;

const God = (props) => {
    return (
        <div className="outer">
            <ul>
                <Query query={FETCH_GOD} variables={{ id: props.match.params.godId }}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error</p>;


                        return (
                            <div>
                                <p className="description">Name: {data.god.name}</p>
                                <Link to={`/`}>
                                    <h4>Back to Index</h4>
                                </Link>
                            </div>
                        );

                    }}
                </Query>
            </ul>
        </div>
    );
};

export default God;