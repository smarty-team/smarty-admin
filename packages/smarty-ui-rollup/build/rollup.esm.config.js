import basicConfig, { name, file } from './rollup.config'
export default {
  ...basicConfig,
  output: {
    name,
    file: file('esm'),
    format: 'es'
  }
}