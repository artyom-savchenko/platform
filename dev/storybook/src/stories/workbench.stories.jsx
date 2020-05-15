//
// Copyright © 2020 Anticrm Platform Contributors.
// 
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// 
// See the License for the specific language governing permissions and
// limitations under the License.
//

import Theme from '../components/Theme.vue'

import ui from '@anticrm/platform-ui'
import platform from '@anticrm/platform'

import Workbench from '@anticrm/platform-workbench/src/components/Workbench.vue'

import core from '@anticrm/platform-core'

export default {
  title: 'Workbench'
}

const corePlugin = platform.getPluginSync(core.id)
const session = corePlugin.getSession()

export const workbench = () => ({
  render() {
    return <Workbench />
  }
})

