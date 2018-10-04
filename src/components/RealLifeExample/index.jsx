import * as React from 'react';

export const setCollapsedClass = (isCollapsed) => {
    if (isCollapsed) {
        return 'read-more__content_collapsed';
    }

    return '';
};

export const ShowMore = (props) => {
    const { isActive, isCollapsed, collapsedHeight, expandedHeight, onToggleFunction, showLessLabel, showMoreLabel } = props;

    const getContentHeight = () => {
        if (isCollapsed) {
            return `${collapsedHeight}`;
        }

        return `${expandedHeight}`;
    };

    const renderLabel = () => {
        if (isCollapsed) {
            return (
                <span>
                    <i className="iconic iconic-chevron-bottom iconic-sm" title={showMoreLabel} /> {showMoreLabel}
                </span>
            );
        }

        return (
            <span>
                <i className="iconic iconic-chevron-top iconic-sm" title={showLessLabel} /> {showLessLabel}
            </span>
        );
    };

    const renderReadmore = () => {
        if (isActive) {
            return (
                <div className="read-more">
                    <div style={{ height: getContentHeight() }} className={`read-more__content ${setCollapsedClass(isCollapsed)}`}>
                        <div className="row">
                            {props.children}
                        </div>
                    </div>
                    <div className="read-more__controls">
                        <a onClick={onToggleFunction}>
                            {renderLabel()}
                        </a>
                    </div>
                </div>
            );
        }

        return (
            <div className="row">
                {props.children}
            </div>
        );
    };

    return renderReadmore();
};

export default ShowMore;
