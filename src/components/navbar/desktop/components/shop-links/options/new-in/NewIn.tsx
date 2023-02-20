import {
  TextLinksComponent,
  BodyFitComponent,
  ImageLinksComponent,
} from "../components";

import {menNewInData, womenNewInData} from "./assets/data";
import {useAppSelector} from "../../../../../../../assets/hooks";

const NewInOptionType = () => {
  const page = useAppSelector(state => state.app.gender);
  // const page = "men";

  const newInData = page === "men" ? menNewInData : womenNewInData;

  return (
    <div className="new-in-option-type-container">
      <section className="new-in-new-products-section">
        <TextLinksComponent
          links={newInData.newProducts}
          title="New Products"
          column={1}
          type="new-in"
        />
      </section>

      {page !== "men" && (
        <section className="new-in-body-fit-section">
          <BodyFitComponent
            header="Body Fits"
            fits={womenNewInData.bodyFits}
            type="new-in"
          />
        </section>
      )}

      <section className={`new-in-new-edits-section ${page}-new-in`}>
        <div className="new-edits-header-container">
          <h4>
            <span>New Edits</span>
          </h4>
        </div>

        <div className="new-edit-contents-container">
          <ImageLinksComponent
            links={newInData.newEdits}
            flexDirection="row"
            type="new-in"
          />
        </div>
      </section>
    </div>
  );
};

export default NewInOptionType;
