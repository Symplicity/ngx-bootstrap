import {
  ApplicationRef, ComponentFactoryResolver, ElementRef, Inject, Injectable, Injector,
  NgZone, Renderer2, ViewContainerRef
} from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { DOCUMENT } from '@angular/common';

@Injectable({providedIn: 'root'})
export class ComponentLoaderFactory {
  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _ngZone: NgZone,
              private _injector: Injector,
              private _posService: PositioningService,
              private _applicationRef: ApplicationRef,
              @Inject(DOCUMENT) private _document: Document
  ) {}

  /**
   *
   * @param _elementRef
   * @param _viewContainerRef
   * @param _renderer
   */
  createLoader<T>(_elementRef?: ElementRef,
                  _viewContainerRef?: ViewContainerRef,
                  _renderer?: Renderer2,
  ): ComponentLoader<T> {
    return new ComponentLoader<T>(
      _viewContainerRef,
      _renderer,
      _elementRef,
      this._injector,
      this._componentFactoryResolver,
      this._ngZone,
      this._applicationRef,
      this._posService,
      this._document
    );
  }
}
