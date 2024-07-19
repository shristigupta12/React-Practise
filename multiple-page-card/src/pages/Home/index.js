import { ViewContainer } from "../../components/layout/view_container/ViewContainer"
import { SectionContainer } from "../../components/layout/section_container/SectionContainer"
import styles from '../page.module.css'
import "../page.module.css"

function Home(){
    return(
        <ViewContainer>
            <SectionContainer>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <div>Challenge us together.</div>
                        <div>Get estimate.</div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.homePageSteps}>
                            <div>In three short steps we will establish the most</div>
                            <div>important details of our joint journey.</div>
                        </div>
                        <div>
                            <ul>
                                <li className={styles.list}><div className={styles.listPoints}>1</div>Your personal details</li>
                                <li className={styles.list}><div className={styles.listPoints}>2</div>Determining the skills of specialists</li>
                                <li className={styles.list}><div className={styles.listPoints}>3</div>Details about the project</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.blackBtn}>Start estimation --</button>
                    </div>
                </div>
            </SectionContainer>
        </ViewContainer>
    )
}

export {Home}