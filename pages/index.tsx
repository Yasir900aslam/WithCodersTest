import React from "react";
import { useTheme } from "@geist-ui/react";
import Heading from "@/components/heading";
import SearchAndShowWrapper from "../components/searchandshow"

const Page = () => {
  const theme = useTheme();

  return (
    <>
      <Heading
        user={{ name: "Yasir Aslam", role: "none", github: "Yasir900Aslam" }}
      />
      <div className="page__wrapper">
        <div className="page__content">
          <div className="projects">
            <SearchAndShowWrapper />
          </div>
        </div>
      </div>
      <style jsx>{`
        .page__wrapper {
          background-color: ${theme.palette.accents_1};
        }
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: 0 ${theme.layout.pageMargin};
          transform: translateY(-35px);
          box-sizing: border-box;
        }
        .projects {
          width: 540px;
          max-width: 100%;
          margin-right: calc(4 * ${theme.layout.gap});
        }
        .projects :global(.project__wrapper):not(:last-of-type) {
          margin-bottom: calc(1.5 * ${theme.layout.gap});
        }
        
        @media (max-width: ${theme.breakpoints.sm.max}) {
          .page__content {
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
          }
          .projects {
            width: 100%;
            margin-right: unset;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
