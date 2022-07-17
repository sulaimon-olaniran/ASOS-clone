import {
  TextLinksComponent,
  BodyFitComponent,
  ImageLinksComponent,
} from "../components";

import {menNewInData, womenNewInData} from "./assets/data";

const NewInOptionType = () => {
  const page = "women";

  const newInData = womenNewInData;

  return (
    <div className="new-in-option-type-container">
      <section className="new-in-new-products-section">
        <TextLinksComponent
          links={newInData.newProducts}
          title="New Products"
          column={1}
        />
      </section>

      <section className="new-in-body-fit-section">
        <BodyFitComponent header="Body Fits" fits={newInData.bodyFits} />
      </section>

      <section className={`new-in-new-edits-section ${page}-new-in`}>
        <div className="new-edits-header-container">
          <h4>
            <span>New Edits</span>
          </h4>
        </div>

        <div className="new-edit-contents-container">
          <ImageLinksComponent links={newInData.newEdits} flexDirection="row" />
        </div>
      </section>
    </div>
  );
};

export default NewInOptionType;
