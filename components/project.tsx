import React from "react";
import { Text, Link, Card, Dot, Tag, useTheme } from "@geist-ui/react";
import * as Icons from "react-feather";
import SearchAndShow from './searchandshow'


const SearchAndShowWrapper: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <div className="project__wrapper">
        <Card className="project__card" shadow>
          <div>
            <SearchAndShow /> 
          </div>
        </Card>
      </div>
      <style jsx>{`
        .project__wrapper :global(.project__card) {
          padding: 0 !important;
        }
        .project__wrapper :global(.project__deployment) {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: ${theme.layout.gapQuarter};
        }
        .project__wrapper :global(.project__deployment) :global(.icon) {
          background-color: #50e3c2;
        }
        .project__wrapper :global(.project__deployment) :global(.label) {
          display: flex;
          align-items: center;
          flex: 1;
          overflow: hidden;
          text-transform: unset;
        }
        .project__wrapper :global(.project__deployment) :global(a) {
          font-size: 0.875rem;
          font-weight: 500;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .project__wrapper :global(.project__environment-tag) {
          color: ${theme.palette.foreground};
          background: ${theme.palette.accents_1};
          border-color: ${theme.palette.accents_2};
          border-radius: 1rem;
          padding: 2px 6px;
          height: unset;
          font-size: 0.75rem;
          font-weight: 500;
          margin-left: ${theme.layout.gapHalf};
        }
        .project__wrapper :global(.project__created-at) {
          color: ${theme.palette.accents_4};
          font-size: 0.875rem;
          text-align: right;
          margin: 0 0 0 ${theme.layout.gapHalf};
        }
        .project__wrapper :global(.project__footer) {
          display: flex;
          align-items: center;
          font-weight: 500;
        }
        .project__wrapper :global(.project__repo) {
          font-size: 0.875rem;
          font-weight: 500;
          margin-left: ${theme.layout.gapQuarter};
        }
        @media (max-width: ${theme.breakpoints.xs.max}) {
          .project__wrapper :global(.project__visit-button) {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default SearchAndShowWrapper;
