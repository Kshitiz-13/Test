import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EducationEdit.module.css";

const EducationEdit: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer22Click = useCallback(() => {
    navigate("/education");
  }, [navigate]);

  return (
    <div className={styles.educationEdit}>
      <div className={styles.frameDiv}>
        <div className={styles.textButtonDiv}>
          <div className={styles.buttonDiv}>Add new</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.frameDiv1}>
            <img
              className={styles.caretDownFilledIcon}
              alt=""
              src="../caretdownfilled2.svg"
            />
            <div className={styles.selectClassesThis}>
              Arkham Institute of Technology, Bangalore
            </div>
            <div className={styles.selectClassesThis1}>May 2014 - Feb 2017</div>
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.frameDiv2}>
            <img
              className={styles.caretDownFilledIcon}
              alt=""
              src="../caretdownfilled5.svg"
            />
            <div className={styles.selectClassesThis}>
              Acme Institute of Technology, Udaipur
            </div>
            <div className={styles.selectClassesThis1}>May 2018 - Feb 2019</div>
          </div>
          <div className={styles.frameDiv3}>
            <div className={styles.frameDiv4}>
              <div className={styles.degreeDiv}>Degree</div>
              <div className={styles.mastersInTechnology}>
                Masters in Technology
              </div>
            </div>
            <div className={styles.groupDiv2}>
              <div className={styles.loremIpsumIsSimplyDummyTe}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets.
              </div>
              <div className={styles.descriptionDiv}>Description</div>
            </div>
            <div className={styles.frameDiv5}>
              <div className={styles.textButtonDiv1}>
                <div className={styles.buttonDiv}>Edit</div>
              </div>
              <div className={styles.textButtonDiv1}>
                <div className={styles.buttonDiv}>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv3}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameDiv6}>
          <div className={styles.frameDiv7}>
            <div className={styles.buttonDiv}>Education (2)</div>
            <div className={styles.rectangleDiv1} />
          </div>
          <div className={styles.frameDiv8}>
            <div className={styles.buttonDiv}>Work Experiences (2)</div>
            <div className={styles.rectangleDiv2} />
          </div>
          <div className={styles.frameDiv8}>
            <div className={styles.buttonDiv}>Achievements (2)</div>
            <div className={styles.rectangleDiv3} />
          </div>
        </div>
      </div>
      <div className={styles.groupDiv4}>
        <div className={styles.rectangleDiv4} />
        <div className={styles.textButtonDiv3}>
          <div className={styles.buttonDiv}>Export</div>
        </div>
        <div className={styles.textButtonDiv4}>
          <div className={styles.buttonDiv}>Import</div>
        </div>
        <div className={styles.resumeBuilderDiv}>Resume Builder</div>
        <img
          className={styles.clipboardOutlinedIcon}
          alt=""
          src="../clipboardoutlined.svg"
        />
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv5} />
          <b className={styles.previewB}>Preview</b>
        </div>
      </div>
      <div className={styles.profileSectionDiv}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.frameDiv10}>
          <div className={styles.groupDiv6}>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
            <div className={styles.textButtonWithIcon}>
              <img
                className={styles.uploadOutlinedIcon}
                alt=""
                src="../uploadoutlined.svg"
              />
              <div className={styles.nameDiv}>Upload photo</div>
            </div>
          </div>
          <div className={styles.frameDiv11}>
            <div className={styles.frameDiv12}>
              <div className={styles.nameDiv}>Name</div>
              <div className={styles.rectangleDiv7} />
            </div>
            <div className={styles.frameDiv12}>
              <div className={styles.nameDiv}>Email-ID</div>
              <div className={styles.rectangleDiv7} />
            </div>
            <div className={styles.textButtonDiv5}>
              <div className={styles.buttonDiv}>Save</div>
            </div>
          </div>
          <div className={styles.frameDiv12}>
            <div className={styles.nameDiv}>Short Bio</div>
            <div className={styles.rectangleDiv9} />
          </div>
        </div>
      </div>
      <div className={styles.rectangleDiv10} />
      <div className={styles.frameDiv15}>
        <div className={styles.frameDiv16}>
          <b className={styles.editEducationB}>Edit education</b>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.instituteDiv}>Institute</div>
          <div className={styles.groupDiv7}>
            <div className={styles.rectangleDiv11} />
            <div className={styles.selectClassesThis4}>
              Acme Institute of Technology, Udaipur
            </div>
          </div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.instituteDiv}>Degree</div>
          <div className={styles.groupDiv8}>
            <div className={styles.rectangleDiv11} />
            <div className={styles.mastersInTechnology1}>
              Masters in Technology
            </div>
          </div>
        </div>
        <div className={styles.frameDiv19}>
          <div className={styles.frameDiv20}>
            <div className={styles.instituteDiv}>Start date</div>
            <div className={styles.groupDiv8}>
              <div className={styles.rectangleDiv13} />
              <div className={styles.may2018Div}>May 2018</div>
            </div>
          </div>
          <div className={styles.frameDiv20}>
            <div className={styles.instituteDiv}>End date</div>
            <div className={styles.groupDiv8}>
              <div className={styles.rectangleDiv13} />
              <div className={styles.may2018Div}>Feb 2019</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.instituteDiv}>Description</div>
          <div className={styles.groupDiv11}>
            <div className={styles.rectangleDiv15} />
            <div
              className={styles.loremIpsumIsSimplyDummyTe1}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}</div>
          </div>
        </div>
        <div className={styles.frameDiv23} onClick={onFrameContainer22Click}>
          <div className={styles.textButtonDiv6}>
            <div className={styles.buttonDiv}>Save</div>
          </div>
          <div className={styles.textButtonDiv7}>
            <div className={styles.buttonDiv}>Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationEdit;
