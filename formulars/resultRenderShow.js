import {styles} from '../styles_global/styles'
import { FontAwesome } from '@expo/vector-icons'

export default function WeightTarget (){
  return(
    <View style={styles.resultContain}>
        <View style={styles.resultTitle}>
          <Text style={styles.resultTitleText}>BMI {bmiTarget}</Text>
          <Text style={styles.resultTitleDesc}>(Cân nặng cần đạt)</Text>
        </View>
          <View style={styles.resultContent}>
            <Text style={styles.result}>{weightTarget}</Text>
            <View style={styles.unitContain}>
              <Text style={styles.unit}>Kg</Text>
            </View>
          </View>
    </View>
  )
}
