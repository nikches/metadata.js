/**
 * ### Выбор варианта сохраненных настроек
 * @module SchemeSettingsSelect
 *
 * Created 19.12.2016
 */
import React, {Component, PropTypes} from "react";
import {Toolbar, ToolbarGroup, ToolbarTitle} from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import DataField, {FieldSelect} from "../DataField";
import Divider from 'material-ui/Divider';

import SaveIcon from "material-ui/svg-icons/content/save";
import CopyIcon from "material-ui/svg-icons/content/content-copy";

export default class SchemeSettingsSelect extends Component {

  static contextTypes = {
    $p: React.PropTypes.object.isRequired
  }

  static propTypes = {
    scheme: PropTypes.object.isRequired,
    handleSchemeChange: PropTypes.func.isRequired,
    minHeight: PropTypes.number,
  }

  constructor(props, context) {

    super(props, context)

    const {scheme} = props
    const {$p} = context
    const _mgr = $p.dp.scheme_settings

    // экземпляр обработки для выбора варианта
    if (!_mgr[scheme.obj]) {
      _mgr[scheme.obj] = $p.dp.scheme_settings.create()
    }

    this.state = {
      _obj: _mgr[scheme.obj],
      _meta: Object.assign({}, _mgr.metadata("scheme"))
    }
    this.state._obj.scheme = scheme

    // корректируем метаданные поля выбора варианта
    this.state._meta.choice_params = [{
      name: "obj",
      path: scheme.obj
    }]
  }

  handleSave = () => {
    const {scheme, handleSchemeChange} = this.props
    scheme.save()
      .then(() => {
        handleSchemeChange(scheme)
      })
  }

  handleCreate = () => {
    const {scheme, handleSchemeChange} = this.props
    // scheme.save()
    //   .then(() => {
    //     handleSchemeChange(scheme)
    //   })
  }

  handleNameChange = () => {
    this.refs.fld_scheme.forceUpdate()
  }

  render() {

    const {state, props, handleCreate, handleSave, handleNameChange} = this
    const {_obj, _meta} = state
    const {scheme, handleSchemeChange, minHeight} = props

    return (
      <div style={{height: minHeight}}>

        <Toolbar>
          <ToolbarGroup className={"meta-toolbar-group"} firstChild={true}>
            <IconButton touch={true} tooltip="Сохранить вариант настроек" tooltipPosition="bottom-right" onTouchTap={handleSave}>
              <SaveIcon />
            </IconButton>

            <IconButton touch={true} tooltip="Создать копию настроек" tooltipPosition="bottom-right" onTouchTap={handleCreate}>
              <CopyIcon />
            </IconButton>

          </ToolbarGroup>

          <ToolbarGroup className={"meta-toolbar-group"}>

            <ToolbarTitle text="Настройка" />

            <div style={{width: 200}}>
              <FieldSelect
                ref="fld_scheme"
                _obj={_obj}
                _fld="scheme"
                _meta={_meta}
                handleValueChange={handleSchemeChange}
              />
            </div>

          </ToolbarGroup>

        </Toolbar>

        <div style={{marginTop: 16}}></div>

        <DataField
          _obj={scheme}
          _fld="name"
          handleValueChange={handleNameChange}
        />
        <DataField
          _obj={scheme}
          _fld="query"
        />

      </div>
    )

  }
}