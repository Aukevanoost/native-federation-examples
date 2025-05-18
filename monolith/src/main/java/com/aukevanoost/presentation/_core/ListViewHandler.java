package com.aukevanoost.presentation._core;


import org.apache.wicket.Component;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.list.ListItem;
import org.apache.wicket.markup.html.list.ListView;
import org.apache.wicket.markup.html.panel.Panel;
import org.apache.wicket.model.IModel;
import org.danekja.java.util.function.serializable.SerializableBiFunction;

import java.util.List;


public class ListViewHandler {
    public static <Tdto, Upanel extends Component> ListView<Tdto> asComponent(
        String panelName,
        IModel<List<Tdto>> models,
        SerializableBiFunction<String, IModel<Tdto>, Upanel> builder
    ) {
        return new ListView<>(panelName, models) {
            @Override
            protected void populateItem(ListItem<Tdto> listItem) {
                listItem.add(builder.apply("listItemContainer", listItem.getModel()));
            }
        };
    }

    public static <Tdto, Upanel extends Panel> ListView<Tdto> asPanel(
        String panelName,
        IModel<List<Tdto>> models,
        SerializableBiFunction<String, IModel<Tdto>, Upanel> builder
    ) {
        return ListViewHandler.asComponent(panelName, models, builder);
    }

    public static <Tdto> ListView<Tdto> asLabel(
        String panelName,
        IModel<List<Tdto>> models
    ) {
        return ListViewHandler.asComponent(panelName, models, Label::new);
    }
}
