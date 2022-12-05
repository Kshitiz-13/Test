import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WorkExp.module.css";

const WorkExp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/education");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/achievements");
  }, [navigate]);

  return (
    <div className={styles.workExpDiv}>
      <div className={styles.profileSectionDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameDiv}>
          <img className={styles.groupIcon} alt="" src="../group-105.svg" />
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <b className={styles.edwardNashtonB}>Edward Nashton</b>
              <div className={styles.enigmayopmailcomDiv}>
                enigma@yopmail.com
              </div>
              <div className={styles.loremIpsumIsSimplyDummyTe}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div className={styles.textButtonDiv}>
              <div className={styles.buttonDiv}>Edit</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.textButtonDiv1}>
          <div className={styles.buttonDiv}>Export</div>
        </div>
        <div className={styles.textButtonDiv2}>
          <div className={styles.buttonDiv}>Import</div>
        </div>
        <div className={styles.resumeBuilderDiv}>Resume Builder</div>
        <img
          className={styles.clipboardOutlinedIcon}
          alt=""
          src="../clipboardoutlined.svg"
        />
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv2} />
          <b className={styles.previewB}>Preview</b>
        </div>
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv3} />
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4} onClick={onFrameContainer3Click}>
            <div className={styles.buttonDiv}>Education (2)</div>
            <div className={styles.rectangleDiv4} />
          </div>
          <div className={styles.frameDiv5}>
            <div className={styles.buttonDiv}>Work Experiences (2)</div>
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.frameDiv4} onClick={onFrameContainer5Click}>
            <div className={styles.buttonDiv}>Achievements (2)</div>
            <div className={styles.rectangleDiv6} />
          </div>
        </div>
      </div>
      <div className={styles.frameDiv7}>
        <div className={styles.textButtonDiv3}>
          <div className={styles.buttonDiv}>Add new</div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.frameDiv8}>
            <img
              className={styles.caretDownFilledIcon}
              alt=""
              src="../caretdownfilled12.svg"
            />
            <div className={styles.selectClassesThis}>
              Stark Weapons and Technologies, Bangalore
            </div>
            <div className={styles.selectClassesThis1}>May 2017 - Feb 2018</div>
          </div>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.frameDiv8}>
            <img
              className={styles.caretDownFilledIcon}
              alt=""
              src="../caretdownfilled1.svg"
            />
            <div className={styles.selectClassesThis}>
              Wayne Enterprises, Bangalore
            </div>
            <div className={styles.selectClassesThis1}>May 2019 - Feb 2022</div>
          </div>
          <div className={styles.frameDiv10}>
            <div className={styles.frameDiv11}>
              <div className={styles.degreeDiv}>Role</div>
              <div className={styles.mastersInTechnology}>Tech Lead</div>
            </div>
            <div className={styles.groupDiv5}>
              <div className={styles.loremIpsumIsSimplyDummyTe1}>
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
            <div className={styles.frameDiv12}>
              <div className={styles.textButtonDiv4}>
                <div className={styles.buttonDiv}>Edit</div>
              </div>
              <div className={styles.textButtonDiv4}>
                <div className={styles.buttonDiv}>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
