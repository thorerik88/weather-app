import styles from './WeatherTable.module.scss';

const WeatherTable = () => {

  return ( 
    <div className={styles.table}>
          <div className={styles.tableWrapper}>
            <div className={styles.tableDates}>
              <p>Test</p>
              <p>I dag</p>
              <p>Lørdag 5. nov</p>
              <p>Søndag 6. nov</p>
              <p>Mandag 7. nov</p>
              <p>Tirsdag 8. nov</p>
            </div>
            <div className={styles.tableNight}>
              <p>Natt</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
            <div className={styles.tableMorning}>
              <p>Morgen</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
            <div className={styles.tableAfternoon}>
              <p>Ettermiddag</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
            <div className={styles.tableEvening}>
              <p>Kveld</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
            <div className={styles.tableTemp}>
              <p>Maks/Min. temp.</p>
              <p>8°/8°</p>
              <p>8°/8°</p>
              <p>8°/8°</p>
              <p>8°/8°</p>
              <p>8°/8°</p>
            </div>
            <div className={styles.tableRainfall}>
              <p>Nedbør</p>
              <p>4,1 mm</p>
              <p>4,1 mm</p>
              <p>4,1 mm</p>
              <p>4,1 mm</p>
              <p>4,1 mm</p>
            </div>
            <div className={styles.tableWind}>
              <p>Vind</p>
              <p>6 m/s</p>
              <p>6 m/s</p>
              <p>6 m/s</p>
              <p>6 m/s</p>
              <p>6 m/s</p>
            </div>
          </div>
        </div>
  )
} 
export default WeatherTable;