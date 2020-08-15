import React from 'react';
import { VictoryChart, VictoryGroup, VictoryArea } from 'victory';
import { Row, Col } from 'react-bootstrap';


export const WeightChart: React.FC = () => {

    return (
        <>
            <Row>
                <Col>
                    <VictoryChart
                        width={300}
                        height={300}
                        domain={{ x: [1, 4], y: [70, 80] }}
                    >
                        <VictoryGroup
                            style={{
                                data: { strokeWidth: 3, fillOpacity: 0.4 }
                            }}
                        >
                            <VictoryArea
                                style={{
                                    data: { fill: "cyan", stroke: "cyan" }
                                }}
                                data={[
                                    { x: 1, y: 78},
                                    { x: 2, y: 77 },
                                    { x: 3, y: 76 },
                                    { x: 4, y: 75 },

                                ]}
                            />
                            <VictoryArea
                                style={{
                                    data: { fill: "magenta", stroke: "magenta" }
                                }}
                                data={[
                                    { x: 1, y: 75 },
                                    { x: 2, y: 74.7 },
                                    { x: 3, y: 74.4 },
                                    { x: 4, y: 74 },

                                ]}
                            />
                        </VictoryGroup>
                    </VictoryChart>
                </Col>
                <Col></Col>
            </Row>
           
        </>
    );
}