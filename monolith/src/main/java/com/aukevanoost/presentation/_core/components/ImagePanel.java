package com.aukevanoost.presentation._core.components;

import org.apache.wicket.AttributeModifier;
import org.apache.wicket.markup.html.image.Image;
import org.apache.wicket.markup.html.panel.GenericPanel;
import org.apache.wicket.model.IModel;
import org.apache.wicket.request.resource.ContextRelativeResource;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class ImagePanel extends GenericPanel<String> {
    private final int[] sizes;
    private final static String CDN = "http://localhost:4000";

    public ImagePanel(String id, IModel<String> urlModel, int... sizes) {
        super(id, urlModel);
        this.sizes = sizes;
        setRenderBodyOnly(true);
    }

    @Override
    protected void onInitialize() {
        super.onInitialize();

        var image = new Image(
            "image",
            getModel().map(u -> new ContextRelativeResource(getImageSrc(u, sizes[0])))
        );

        image.add(new AttributeModifier("width", sizes[0]));
        image.add(new AttributeModifier("sizes", sizes[0] + "px"));

        image.add(new AttributeModifier(
            "srcset",
            getModel().map(
                u -> IntStream.of(sizes)
                    .mapToObj(size -> getImageSrcSet(u, size))
                    .collect(Collectors.joining(", "))
            )
        ));

        for(String tag : List.of("class", "id", "alt")) {
            if(getMarkupAttributes().get(tag) != null) {
                image.add(new AttributeModifier(tag, getMarkupAttributes().get(tag).toString()));
            }
        }

        add(image);
    }

    private String getImageSrc(String url, int size) {
        return CDN + url.replace("[size]", String.valueOf(size));
    }

    private String getImageSrcSet(String url, int size) {
        return String.format("%s %dw", this.getImageSrc(url, size), size);
    }
}
