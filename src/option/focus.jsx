console.log( "===== simpread option focus mode load =====" )

import ThemeSel  from 'themesel';
import Shortcuts from 'shortcuts';
import Include   from 'include';
import Exclude   from 'exclude';

import * as ss   from 'stylesheet';

const themes = [
        "235, 235, 235, 0.9",
        "216, 216, 216, 0.9",
        "229, 221, 208, 0.9",
        "243, 234, 203, 0.9",
        "176, 192, 182, 0.9",
        "28, 31, 43, 0.9",
        "61, 66, 70, 0.9",
        "17, 18, 20, 0.9"
    ],
    labels = [ "白练", "灰青", "素色", "鸟之子色", "青磁鼠", "焦茶", "御纳戸色", "黒鸢" ];

export default class FocusOpt extends React.Component {

    changeBgColor( bgcolor, $target ) {
        bgcolor = $target.css( "background-color" );
        this.props.option.bgcolor = ss.BackgroundColor( bgcolor );
        console.log( "this.props.option.bgcolor = ", this.props.option.bgcolor )
    }

    changeOpacity() {
        const opacity = event.target.value,
              bgcolor = ss.Opacity( opacity );
        bgcolor && ( this.props.option.bgcolor = bgcolor );
        this.props.option.opacity = opacity;
        console.log( "this.props.option.opacity = ", this.props.option.opacity )
    }

    changeShortcuts( shortcuts ) {
        this.props.option.shortcuts = shortcuts;
        console.log( "this.props.option.shortcuts = ", this.props.option.shortcuts )
    }

    changeInclude( value ) {
        this.props.option.site.include = value;
        console.log( "this.props.option.site.include = ", this.props.option.site.include )
    }

    changeExclude( value ) {
        this.props.option.site.exclude = value;
        console.log( "this.props.option.site.exclude = ", this.props.option.site.exclude )
    }

    componentDidMount() {
        this.refs.opacity.value   = this.props.option.opacity;
    }

    render() {
        return (
            <sr-opt-focus>
                <sr-opt-gp>
                    <sr-opt-label>主题色</sr-opt-label>
                    <ThemeSel themes={ themes } names={ themes } labels={ labels } theme={ ss.GetColor(this.props.option.bgcolor) + ", 0.9" } changeBgColor={ (val,target)=>this.changeBgColor(val,target) } />
                </sr-opt-gp>
                <sr-opt-gp>
                    <sr-opt-label>透明度</sr-opt-label>
                    <opacity>
                        <input ref="opacity"
                            type="range" min="50" max="95" step="5" 
                            onChange={ ()=> this.changeOpacity() }
                        />
                    </opacity>
                </sr-opt-gp>
                <sr-opt-gp>
                    <Shortcuts shortcuts={ this.props.option.shortcuts } changeShortcuts={ val=>this.changeShortcuts(val) } />
                </sr-opt-gp>
                <sr-opt-gp>
                    <Include include={ this.props.option.site.include } changeInclude={ val=>this.changeInclude(val) } />
                </sr-opt-gp>
                <sr-opt-gp>
                    <Exclude exclude={ this.props.option.site.exclude } changeExclude={ val=>this.changeExclude(val) } />
                </sr-opt-gp>
            </sr-opt-focus>
        )
    }
}