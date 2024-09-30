import { Component, inject, Input } from '@angular/core';
import { FaIconLibrary, FlipProp, FontAwesomeModule, RotateProp, SizeProp } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() icon!: IconDefinition;
  @Input() size?: SizeProp;
  @Input() rotate?: RotateProp;
  @Input() Flip?: FlipProp;
  @Input() applySpin?: boolean;
  @Input() applyBorder?: boolean;

  activeIcons = inject(FaIconLibrary);

  ngOnInit(): void {
    this.activeIcons.addIcons(this.icon);
  }
}
