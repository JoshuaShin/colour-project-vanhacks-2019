import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

// var numCards = 9;
class Grid extends React.PureComponent {


    static defaultProps = {
        className: "layout",
        isDraggable: false,
        isResizable: false,
        items: 100, //limit of how many cards in can be on the page.
        cols: 12,
        rowHeight: 30,
        onLayoutChange: function() {}
    };

    constructor(props) {
        super(props);

        const layout = this.generateLayout();
        this.state = { layout };
    }

    generateDOM() {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }

        return this.props.grid.map((grid) =>
            <a key={grid.id} href="#" onClick={handleClick}>
            <span className="text">{grid.message}</span>
        </a>);

    }

    generateLayout() {
        const p = this.props;


        return _.map(new Array(p.items), function(item, i) {
            var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
            return {
                x: (i * 2) % 12,
                y: Math.floor(i / 6) * y,
                w: 2,
                h: y,
                i: i.toString()
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        console.log(this.props.grid.map((grid) => grid.message));
        // var message = this.props.grid.message;

        return (
            <ReactGridLayout
                layout={this.state.layout}
                onLayoutChange={this.onLayoutChange}
                {...this.props}
            >
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}

export default Grid;